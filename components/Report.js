import { useContext } from "react";
import { Text, View } from "react-native";
import { DataTable } from "react-native-paper";
import AppContext from "../AppContext";
import styles from "../styles/styles";
import currencyFormat from "../Utils/Formatter";

export default function Report() {
    const context = useContext(AppContext);

    /**
     * Calcula o relatório a ser exibido na tela.
     * @returns Array. Retorna um array com todas as linhas que contém os valores a serem exibidos no relatório.
     */
    const calculateTable = () => {
        let totalProducts = 0;
        let totalValue = 0;
        const rows = [];

        context.categories.forEach(c => {
            let totalStored = 0;
            let totalPrice = 0;

            context.products.map(p => {
                if (p.codCategory === c.id) {
                    totalPrice += p.stored * p.price;
                    totalStored += p.stored;
                }
            });
            totalProducts += totalStored;
            totalValue += totalPrice;

            rows.push({ id: c.id, category: c.name, stored: totalStored, total: totalPrice });
        });

        rows.sort((a, b) => -1 * (a.total - b.total));
        rows.push({ id: 0, category: "TOTAL", stored: totalProducts, total: totalValue })
        
        return rows;
    };

    const rows = calculateTable()

    /**
     * Render do hook.
     */
    return (
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={styles.h2}>Inventário por Categoria</Text>
            </View>
            <View style={styles.componentContent}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Categoria</DataTable.Title>
                        <DataTable.Title numeric>Qtde Produtos</DataTable.Title>
                        <DataTable.Title numeric>Valor</DataTable.Title>
                    </DataTable.Header>

                    {rows.map(row => {
                        return (<DataTable.Row key={row.id}>
                            <DataTable.Cell>{row.category}</DataTable.Cell>
                            <DataTable.Cell numeric>{row.stored}</DataTable.Cell>
                            <DataTable.Cell numeric>{currencyFormat(row.total)}</DataTable.Cell>
                        </DataTable.Row>)
                    })}
                </DataTable>
            </View>
        </View>
    );
}