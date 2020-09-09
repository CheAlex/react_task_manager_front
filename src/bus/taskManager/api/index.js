export const api = {
  tasks: {
    getAll: async () => {
      const response = await fetch("http://localhost:5000/tasks");
      const tasks = await response.json();

      return tasks;
    },

    toggleComplete: async (id) => {
      const response = await fetch(`http://localhost:5000/tasks/toggle-completed/${id}`);
      // await response.json();
    },

    remove: async (id) => {
      const response = await fetch(
        `http://localhost:5000/tasks/${id}`,
        {
          method: "DELETE",
        }
      );
      // await response.json();
    },

    create: async (task) => {
      const response = await fetch(
        `http://localhost:5000/tasks`,
        {
          method: "POST",
          cache: "no-cache",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify(task)
        }
      );
    }
  }
};
