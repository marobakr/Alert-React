import {
  BellRing,
  CheckCheck,
  CircleX,
  Music3,
  TriangleAlert,
} from 'lucide-react';
import './App.css';
import Alert from './components/ui/alert';

function App() {
  return (
    <>
      <Alert
        name='alert-default'
        heading='Upgrade your plan'
        discriptons={
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odit
            repellendus. Minus eius excepturi quasi, cumque repellat accusantium
            adipisci consequuntur. Voluptatum sit sapiente
            <a href=''>dolorem assumenda,</a>
            recusandae laboriosam dicta adipisci laudantium.'
          </div>
        }
        icon={<BellRing />}
        children={<p>first children</p>}
      />
      <Alert
        name='alert-info'
        heading='Notes'
        discriptons=' adipisicing elit. Qui, odit repellendus. Minus eius excepturi quasi, cumque repellat accusantium adipisci consequuntur. Voluptatum sit sapiente dolorem assumenda, recusandae laboriosam dicta adipisci laudantium.'
        icon={<Music3 />}
        children={<p>Second children</p>}
      />
      <Alert
        name='alert-error'
        heading='somthing wetn wrong'
        discriptons='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odit repellendus. Minus eius  consequuntur. Voluptatum sit sapiente dolorem assumenda, recusandae laboriosam dicta adipisci laudantium.'
        children={<p>There children</p>}
        icon={<CircleX />}
      />

      <Alert
        name='alert-success'
        heading='your order has been process'
        discriptons='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odit repellendus. Minus eius excepturi consequuntur. Voluptatum sit sapiente dolorem assumenda, recusandae laboriosam dicta adipisci laudantium.'
        children={<p>Foure children</p>}
        icon={<CheckCheck />}
      />
      <Alert
        name='alert-warning'
        heading='tips & tricks'
        discriptons='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odit repellendus. Minus eius excepturi quasi, cumque repellat accusantium adipisci consequuntur. Voluptatum sit sapiente dolorem assumenda, .'
        children={<p>Five children</p>}
        icon={<TriangleAlert />}
      />
    </>
  );
}

export default App;
