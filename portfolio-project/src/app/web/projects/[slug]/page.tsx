import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { webProjects } from "@/data";
import { ProjectStory } from "@/components/ProjectStory";

type Props = { params: Promise<{slug:string}> };
export function generateStaticParams() { return webProjects.map(project=>({slug:project.slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const project = webProjects.find(p=>p.slug === slug);
  return project ? {title:project.title,description:project.summary} : {title:"Project Not Found"};
}
export default async function ProjectDetails({params}:Props) {
  const {slug}=await params;
  const project=webProjects.find(p=>p.slug === slug);
  if (!project) notFound();
  return <ProjectStory project={project}/>;
}
