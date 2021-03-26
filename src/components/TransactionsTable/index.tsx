import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>26/03/2021</td>
          </tr>
          <tr>
            <td>Locação de automóvel</td>
            <td className="withdraw">-R$120,00</td>
            <td>Veículos</td>
            <td>10/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}