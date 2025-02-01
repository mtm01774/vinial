import { Layout } from '../../../components/layout/Layout';

export default function ENLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
} 