import FormElements from '@/components/FormElements';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Form Elements | TailAdmin - Next.js Dashboard Template',
  description:
    'This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template',
};

const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <FormElements />
    </DefaultLayout>
  );
};

export default FormElementsPage;
