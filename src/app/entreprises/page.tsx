import EnteprisePage from '@/components/Entreprise/EntreprisePage';
import ProtectedRoute from '@/components/Hoc/ProtectedRoute';
import { AuthProvider } from '@/hooks/useAuth';

export default function Dashboard() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <EnteprisePage />
      </ProtectedRoute>
    </AuthProvider>
  );
}
