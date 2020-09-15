export const api = {
  tasks: {
    getAll: async () => {
      return await fetch(
          "http://localhost:5000/tasks"
      );
    },

    markComplete: async (id) => {
      return await fetch(`http://localhost:5000/tasks/mark-complete/${id}`);
    },

    unmarkComplete: async (id) => {
      return await fetch(`http://localhost:5000/tasks/unmark-complete/${id}`);
    },

    remove: async (id) => {
      return await fetch(
        `http://localhost:5000/tasks/${id}`,
        {
          method: "DELETE",
        }
      );
    },

    create: async (task) => {
      return await fetch(
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
