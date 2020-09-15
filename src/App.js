// Core
import React from "react";
import { Provider } from 'react-redux';
import { initializeIcons } from "@fluentui/react";

import { store } from './init/store';

// Domains
import { TaskManager } from "./bus/taskManager";

initializeIcons();

export const App = () => (
  <>
    <Provider store={ store }>
        <TaskManager />
    </Provider>
  </>
);
