export const api = {
  tasks: {
    getAll: async () => {
      const response = await fetch(
          "http://localhost:5000/tasks"
      );

      return response;
    },

    toggleComplete: async (id) => {
      await fetch(`http://localhost:5000/tasks/toggle-complete/${id}`);
    },

    remove: async (id) => {
      await fetch(
        `http://localhost:5000/tasks/${id}`,
        {
          method: "DELETE",
        }
      );
      // await response.json();
    },

    create: (task) => {
      return fetch(
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
