import { Image, StyleSheet, View, Text, Modal, ScrollView } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import React from 'react';
import { DataTable } from 'react-native-paper';
import TableCell, { CellData } from '@/components/TableCell';

export default function HomeScreen() {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([8, 15, 20]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [data, setData] = React.useState<CellData[]>([
    {
      id: 1,
      name: 'Cupcake',
      quantity: 2,
      table: 1,
      note: "We Need more sauce",
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Eclair',
      quantity: 1,
      table: 1,
      note: "We Need more sauce",
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Frozen yogurt',
      quantity: 3,
      table: 2,
      note: "We Need more sauce",
      status: 'Pending'
    },
    {
      id: 4,
      name: 'Gingerbread',
      quantity: 1,
      table: 2,
      note: "We Need more sauce",
      status: 'Pending'
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* <ScrollView> */}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Quantity</DataTable.Title>
          <DataTable.Title>Note</DataTable.Title>
          <DataTable.Title>Table</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>

        <ScrollView style={{ height: 365 }}>
          {data.slice(from, to).map((data) => (
            <TableCell data={data} setData={setData}></TableCell>
          ))}
        </ScrollView>

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(data.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${data.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
      {/* </ScrollView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
