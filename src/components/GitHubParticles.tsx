"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
} from "@react-three/drei";

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const colors = [
  "#9b5de5",
  "#00c9a7",
  "#ff9f43",
  "#6a0dad",
  "#1a1b41",
];

function getPosition(index: number): [number, number, number] {
  const angle = index * 0.7;
  const radius = 0.65 + index * 0.09;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const z = ((index % 7) - 3) * 0.12;

  return [x, y, z];
}

export default function GitHubParticles() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function loadRepositories() {
      try {
        const response = await fetch(
          "https://api.github.com/users/KatrinaFinney/repos?per_page=50&sort=updated"
        );

        if (!response.ok) {
          throw new Error(
            `GitHub request failed with status ${response.status}`
          );
        }

        const data: unknown = await response.json();

        if (Array.isArray(data)) {
          setRepos(data as Repo[]);
        } else {
          setRepos([]);
        }
      } catch (error) {
        console.error("Unable to load GitHub repositories:", error);
        setRepos([]);
      }
    }

    loadRepositories();
  }, []);

  function openRepository(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function setPointerCursor() {
    document.body.style.cursor = "pointer";
  }

  function resetCursor() {
    document.body.style.cursor = "default";
  }

  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 65 }}>
      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        minDistance={5}
        maxDistance={14}
      />

      <ambientLight intensity={1} />

      {repos.map((repo, index) => (
        <mesh
          key={repo.id}
          position={getPosition(index)}
          onClick={() => openRepository(repo.html_url)}
          onPointerOver={setPointerCursor}
          onPointerOut={resetCursor}
        >
          <Sphere args={[0.23, 32, 32]}>
            <MeshDistortMaterial
              color={colors[index % colors.length]}
              emissive={colors[index % colors.length]}
              emissiveIntensity={4}
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </mesh>
      ))}
    </Canvas>
  );
}