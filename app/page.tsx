import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import CkEditorDemo from '@/components/ckDemo';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <CkEditorDemo />
    </>
  );
}
