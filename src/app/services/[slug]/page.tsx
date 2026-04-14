import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | SovraTech",
    };
  }

  return {
    title: `${service.navTitle} | SovraTech`,
    description: service.heroText,
  };
}

export default async function ServiceDetailRoute({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}