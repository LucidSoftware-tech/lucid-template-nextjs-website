import { apiClient } from "@/lib/api-client";

// MOCK DATA
let mockUsers = [
  { id: "1", name: "Alice Smith", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "Bob Jones", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: "3", name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Active" },
];

export const usersService = {
  getAll: async (params) => {
    // REAL API:
    // const res = await apiClient.get("/users", { params });
    // return res.data;

    // MOCK:
    return new Promise((resolve) => {
      setTimeout(() => {
        let data = [...mockUsers];
        if (params?.search) {
          data = data.filter(u => u.name.toLowerCase().includes(params.search.toLowerCase()) || u.email.toLowerCase().includes(params.search.toLowerCase()));
        }
        resolve({ data, total: data.length });
      }, 500);
    });
  },

  getOne: async (id) => {
    // REAL API:
    // const res = await apiClient.get(`/users/${id}`);
    // return res.data;

    // MOCK:
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find(u => u.id === id);
        if (user) resolve(user);
        else reject(new Error("User not found"));
      }, 300);
    });
  },

  create: async (data) => {
    // REAL API:
    // const res = await apiClient.post("/users", data);
    // return res.data;

    // MOCK:
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = { id: String(Date.now()), ...data };
        mockUsers.push(newUser);
        resolve(newUser);
      }, 500);
    });
  },

  update: async (id, data) => {
    // REAL API:
    // const res = await apiClient.put(`/users/${id}`, data);
    // return res.data;

    // MOCK:
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mockUsers.findIndex(u => u.id === id);
        if (index > -1) {
          mockUsers[index] = { ...mockUsers[index], ...data };
          resolve(mockUsers[index]);
        } else {
          reject(new Error("User not found"));
        }
      }, 500);
    });
  },

  delete: async (id) => {
    // REAL API:
    // await apiClient.delete(`/users/${id}`);
    // return true;

    // MOCK:
    return new Promise((resolve) => {
      setTimeout(() => {
        mockUsers = mockUsers.filter(u => u.id !== id);
        resolve(true);
      }, 500);
    });
  }
};
