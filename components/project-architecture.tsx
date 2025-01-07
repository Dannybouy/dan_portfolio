import Image from "next/image"

interface ProjectArchitectureProps {
  architecture: {
    overview: string
    diagram: string
    components: Array<{
      name: string
      description: string
    }>
    dataFlow: Array<{
      from: string
      to: string
      description: string
    }>
  }
}

export function ProjectArchitecture({ architecture }: ProjectArchitectureProps) {
  return (
    <div className="space-y-8">
      <div className="prose dark:prose-invert">
        <h2>System Overview</h2>
        <p>{architecture.overview}</p>
      </div>

      <div className="relative aspect-[16/10] rounded-lg bg-zinc-100 dark:bg-zinc-800 p-4">
        <Image
          src={architecture.diagram}
          alt="Architecture diagram"
          className="h-full w-full object-contain"
          width={100}
          height={100}
        />
      </div>

      <div className="prose dark:prose-invert">
        <h2>Key Components</h2>
        <ul>
          {architecture.components.map((component) => (
            <li key={component.name}>
              <strong>{component.name}</strong>: {component.description}
            </li>
          ))}
        </ul>

        <h2>Data Flow</h2>
        <ul>
          {architecture.dataFlow.map((flow, index) => (
            <li key={index}>
              <strong>{flow.from} → {flow.to}</strong>: {flow.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

