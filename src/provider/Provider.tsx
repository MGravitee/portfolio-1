import {NextUIProvider} from '@nextui-org/system';
import { useNavigate } from 'react-router-dom';


function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  
  return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
}

export default Provider