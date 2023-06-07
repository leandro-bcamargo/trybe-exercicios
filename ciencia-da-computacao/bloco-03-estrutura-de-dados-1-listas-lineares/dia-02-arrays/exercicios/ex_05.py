# servidores =  [[1,0],[0,1]]
# resultado: 0
# Linhas e colunas são diferentes.

# servidores = [[1,0],[1,1]]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

# servidores = [[1, 0, 0],
#               [1, 0, 0],
#               [0, 0, 1]]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.


# def count_servers(matrix):
#     count = 0
#     for i in range(len(matrix)):
#         for j in range(len(matrix[0])):
#             if matrix[i][j] == 1:
#                 if (
#                     sum(matrix[i]) > 1
#                     or sum(matrix[r][j] for r in range(len(matrix))) > 1
#                 ):
#                     count += 1
#     return count


def count_servers(matrix):
    count = 0
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] == 1:
                if (
                    sum(matrix[i]) > 1
                    or sum(matrix[k][j] for k in range(len(matrix))) > 1
                ):
                    count += 1

    return count


print(count_servers([[1, 0, 0], [1, 0, 0], [0, 0, 1]]))
print(count_servers([[1, 0], [1, 1]]))
print(count_servers([[1, 0], [0, 1]]))
