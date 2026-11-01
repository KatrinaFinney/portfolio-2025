"use client";

import { useEffect, useState } from "react";
import { Canvas, type ThreeEvent } from "@react-three/fiber";
import { Edges, OrbitControls, RoundedBox } from "@react-three/drei";

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

type Position = [number, number, number];
type Rotation = [number, number, number];

const FACE_COLORS = {
  front: "#ec4899",
  back: "#4f46e5",
  right: "#00c9a7",
  left: "#ff9f43",
  top: "#c084fc",
  bottom: "#9b5de5",
};

const CUBIE_POSITIONS: Position[] = [-1, 0, 1].flatMap((x) =>
  [-1, 0, 1].flatMap((y) =>
    [-1, 0, 1]
      .filter((z) => !(x === 0 && y === 0 && z === 0))
      .map((z) => [x, y, z] as Position)
  )
);

function isRepo(value: unknown): value is Repo {
  if (!value || typeof value !== "object") return false;

  const repo = value as Partial<Repo>;
  return (
    typeof repo.id === "number" &&
    typeof repo.name === "string" &&
    typeof repo.html_url === "string"
  );
}

function Sticker({
  color,
  position,
  rotation = [0, 0, 0],
}: {
  color: string;
  position: Position;
  rotation?: Rotation;
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[0.67, 0.67]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.65}
        metalness={0.18}
        roughness={0.22}
        toneMapped={false}
      />
    </mesh>
  );
}

function Cubie({
  position,
  repo,
  isHovered,
  onHover,
  onLeave,
  onOpen,
}: {
  position: Position;
  repo?: Repo;
  isHovered: boolean;
  onHover: (repo?: Repo) => void;
  onLeave: () => void;
  onOpen: (repo?: Repo) => void;
}) {
  const [x, y, z] = position;

  function handlePointerOver(event: ThreeEvent<PointerEvent>) {
    event.stopPropagation();
    onHover(repo);
  }

  function handleClick(event: ThreeEvent<MouseEvent>) {
    event.stopPropagation();
    onOpen(repo);
  }

  return (
    <group
      position={[x * 0.94, y * 0.94, z * 0.94]}
      onPointerOver={handlePointerOver}
      onPointerOut={onLeave}
      onClick={handleClick}
    >
      <RoundedBox args={[0.84, 0.84, 0.84]} radius={0.075} smoothness={4}>
        <meshStandardMaterial
          color={isHovered ? "#1f2937" : "#090f1d"}
          emissive={isHovered ? "#7c3aed" : "#030712"}
          emissiveIntensity={isHovered ? 0.7 : 0.2}
          metalness={0.58}
          roughness={0.28}
        />
        <Edges
          color={isHovered ? "#f5d0fe" : "#475569"}
          threshold={12}
        />
      </RoundedBox>

      {z === 1 ? (
        <Sticker color={FACE_COLORS.front} position={[0, 0, 0.426]} />
      ) : null}
      {z === -1 ? (
        <Sticker
          color={FACE_COLORS.back}
          position={[0, 0, -0.426]}
          rotation={[0, Math.PI, 0]}
        />
      ) : null}
      {x === 1 ? (
        <Sticker
          color={FACE_COLORS.right}
          position={[0.426, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      ) : null}
      {x === -1 ? (
        <Sticker
          color={FACE_COLORS.left}
          position={[-0.426, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      ) : null}
      {y === 1 ? (
        <Sticker
          color={FACE_COLORS.top}
          position={[0, 0.426, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      ) : null}
      {y === -1 ? (
        <Sticker
          color={FACE_COLORS.bottom}
          position={[0, -0.426, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      ) : null}
    </group>
  );
}

export default function GitHubParticles() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [hoveredRepoId, setHoveredRepoId] = useState<number | null>(null);

  const hoveredRepo = repos.find((repo) => repo.id === hoveredRepoId);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      try {
        const response = await fetch(
          "https://api.github.com/users/KatrinaFinney/repos?per_page=50&sort=updated",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            `GitHub request failed with status ${response.status}`
          );
        }

        const data: unknown = await response.json();
        setRepos(Array.isArray(data) ? data.filter(isRepo).slice(0, 26) : []);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Unable to load GitHub repositories:", error);
          setRepos([]);
        }
      }
    }

    loadRepositories();
    return () => controller.abort();
  }, []);

  function previewRepository(repo?: Repo) {
    setHoveredRepoId(repo?.id ?? null);
    document.body.style.cursor = repo ? "pointer" : "default";
  }

  function clearPreview() {
    setHoveredRepoId(null);
    document.body.style.cursor = "default";
  }

  function openRepository(repo?: Repo) {
    if (repo) {
      window.open(repo.html_url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div
      className="relative h-full w-full"
      aria-label="Interactive cube of Katrina Finney's recent GitHub repositories"
    >
      <Canvas
        camera={{ position: [5.5, 4.8, 7], fov: 42 }}
        dpr={[1, 1.75]}
      >
        <ambientLight intensity={0.42} />
        <pointLight position={[4, 5, 5]} intensity={42} color="#c084fc" />
        <pointLight position={[-5, -2, 4]} intensity={34} color="#00c9a7" />
        <pointLight position={[0, 2, -5]} intensity={28} color="#ff9f43" />

        <group rotation={[0.34, -0.45, 0.12]}>
          {CUBIE_POSITIONS.map((position, index) => {
            const repo = repos[index];
            return (
              <Cubie
                key={position.join("-")}
                position={position}
                repo={repo}
                isHovered={repo?.id === hoveredRepoId}
                onHover={previewRepository}
                onLeave={clearPreview}
                onOpen={openRepository}
              />
            );
          })}
        </group>

        <OrbitControls
          makeDefault
          autoRotate={hoveredRepoId === null}
          autoRotateSpeed={0.65}
          enableDamping
          dampingFactor={0.055}
          enablePan={false}
          minDistance={5.5}
          maxDistance={11}
        />
      </Canvas>

      <div
        className="pointer-events-none absolute bottom-2 left-1/2 max-w-[92%] -translate-x-1/2 rounded-full border border-white/10 bg-gray-950/80 px-4 py-2 text-center text-xs font-semibold text-gray-200 shadow-lg backdrop-blur sm:bottom-4 sm:text-sm"
        aria-live="polite"
      >
        {hoveredRepo?.name ?? "26 recent repositories · select a glowing cubie"}
      </div>

      <ul className="sr-only">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
