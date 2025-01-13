import Image from "next/image";

interface ProjectArchitectureProps {
  architecture: {
    overview: string;
    diagram: string;
    components: Array<{
      name: string;
      description: string;
    }>;
    dataFlow: Array<{
      from: string;
      to: string;
      description: string;
    }>;
  };
}

export function ProjectArchitecture({
  architecture,
}: ProjectArchitectureProps) {
  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-zinc-100 dark:bg-zinc-800 p-px">
        <Image
          src={architecture.diagram}
          alt="Architecture diagram"
          className="h-full w-full object-cover"
          width={5000}
          height={5000}
        />
      </div>
    </div>
  );
}
