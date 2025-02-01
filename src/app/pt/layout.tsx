import { Layout } from '../../../components/layout/Layout';

export default function PTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
} 