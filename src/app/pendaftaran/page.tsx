import { redirect } from 'next/navigation';

export default function PendaftaranPage() {
  redirect('/?status=closed');
}
