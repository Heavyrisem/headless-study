export const App = `
import { Menu } from 'ui';

export default function App() {
    return (
    <Menu>
        <Menu.Button className="px-4 py-2 rounded-lg  text-white bg-zinc-800 hover:bg-zinc-600 transition-colors duration-150">
        open
        </Menu.Button>
        <Menu.Items className="absolute mt-2 rounded-lg bg-zinc-700 text-white">
        <div className="p-2">
            <Menu.Item
            id="Menu 1"
            value="Menu 1"
            className="block m-0 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 focus:outline-none transition-colors duration-150"
            >
            Panel 1
            </Menu.Item>
            <Menu.Item
            id="Menu 2"
            value="Menu 2"
            className="block m-0 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 focus:outline-none transition-colors duration-150"
            >
            Panel 2
            </Menu.Item>
            <Menu.Item
            id="Menu 3"
            value="Menu 3"
            className="block m-0 px-2 py-1 rounded hover:bg-zinc-600 focus-visible:bg-zinc-600 focus:outline-none transition-colors duration-150"
            >
            Panel 3
            </Menu.Item>
        </div>
        </Menu.Items>
    </Menu>
    )
}
`;