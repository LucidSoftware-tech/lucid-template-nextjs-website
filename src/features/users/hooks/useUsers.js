import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { usersService } from "../services/users.service";

export function useUsers(params) {
  return useQuery({
    queryKey: ["users", params],
    queryFn: () => usersService.getAll(params),
  });
}

export function useUser(id) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => usersService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => usersService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => usersService.update(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["users", variables.id] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => usersService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
