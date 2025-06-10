export const toDoListApp = {}

import { events } from "./events";
import { Tasks } from "./tasks";



toDoListApp.events = events
toDoListApp.tasks = new Tasks()
