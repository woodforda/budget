import React from 'react';
import {PieChartOutlined} from "@ant-design/icons";
import DashboardCard from '../dashboard/DashboardCard';
import {ResponsiveBar} from '@nivo/bar';

const dataSource = [
  {
    key: '1',
    category: 'Healthcare',
    budget: 354.00,
    actual: 354.00,
  },
  {
    key: '2',
    category: 'Household',
    budget: 200.00,
    actual: 180.00,
  },
  {
    key: '3',
    category: 'Transport',
    budget: 125.00,
    actual: 0.00,
  },
  {
    key: '4',
    category: 'Food',
    budget: 800.00,
    actual: 550.00,
  },
  {
    key: '5',
    category: 'Miscellaneous',
    budget: 75.00,
    actual: 26.00,
  },
];

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Budgeted',
    dataIndex: 'budget',
    key: 'budget',
    align: 'right' as 'right',
    render: (amt: number) => {
      return (<>{new Intl.NumberFormat().format(amt)}</>)
    },
  },
  {
    title: 'Actual',
    dataIndex: 'actual',
    key: 'actual',
    align: 'right' as 'right',
    render: (amt: number) => {
      return (<>{new Intl.NumberFormat().format(amt)}</>)
    },
  },
];

const data = [
  {
    "id": "Healthcare",
    "label": "Healthcare",
    "value": 354,
    "color": "hsl(42, 70%, 50%)"
  },
  {
    "id": "Household",
    "label": "Household",
    "value": 200,
    "color": "hsl(347, 70%, 50%)"
  },
  {
    "id": "Transport",
    "label": "Transport",
    "value": 125,
    "color": "hsl(193, 70%, 50%)"
  },
  {
    "id": "Food",
    "label": "Food",
    "value": 800,
    "color": "hsl(60, 70%, 50%)"
  },
  {
    "id": "Rent",
    "label": "Rent",
    "value": 1490,
    "color": "hsl(341, 70%, 50%)"
  }
];


const barData = [
  {
    "category": "Healthcare",
    "budget": 354,
    "budgetColor": "hsl(99,82%,30%)",
    "actual": 6,
    "actualColor": "hsl(341,91%,49%)",
  },
  {
    "category": "Household",
    "budget": 200,
    "budgetColor": "hsl(99,82%,30%)",
    "actual": 184,
    "actualColor": "hsl(341,91%,49%)",
  },
  {
    "category": "Transport",
    "budget": 125,
    "budgetColor": "hsl(99,82%,30%)",
    "actual": 189,
    "actualColor": "hsl(341,91%,49%)",
  },
  {
    "category": "Food",
    "budget": 800,
    "budgetColor": "hsl(99,82%,30%)",
    "actual": 120,
    "actualColor": "hsl(341,91%,49%)",
  },
  {
    "category": "Rent",
    "budget": 800,
    "budgetColor": "hsl(99,82%,30%)",
    "actual": 1490,
    "actualColor": "hsl(341,91%,49%)",
  },
]

function BudgetDashboardCard() {
  let data2: any[] = []
  let minAmount = 0

  barData.forEach(x => {
    let amount = (x.budget - x.actual)
    let amountColor = "hsl(99,82%,30%)"
    if (amount < 0) {
      if (amount < minAmount) {
        minAmount = amount
      }
      amountColor = "hsl(341,91%,49%)"
    }
    data2.push({category: x.category, amount: amount, color: amountColor})
  })


  return (
      <DashboardCard title="Budget"
                     description={"Your budget status"}
                     icon={<PieChartOutlined/>}
                     link={"/budget"}
      >
        <div style={{height: '500px'}}>
          <ResponsiveBar
              data={data2}
              keys={['amount']}
              indexBy="category"
              margin={{top: 50, right: 10, bottom: 50, left: 50}}
              padding={0.35}
              groupMode="stacked"
              // layout="horizontal"
              // minValue={minAmount}
              // colors={{ scheme: 'nivo' }}
              // borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
              // axisTop={null}
              // axisRight={null}
              enableLabel={false}
              // axisBottom={{
              //   tickSize: 5,
              //   tickPadding: 5,
              //   tickRotation: 0,
              //   legend: 'Categories',
              //   legendPosition: 'middle',
              //   legendOffset: 32
              // }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                // legend: 'Amount',
                // legendPosition: 'middle',
                // legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
              // legends={[
              //   {
              //     dataFrom: 'keys',
              //     anchor: 'top',
              //     direction: 'row',
              //     justify: false,
              //     translateY: -25,
              //     itemsSpacing: 2,
              //     itemWidth: 100,
              //     itemHeight: 20,
              //     itemDirection: 'left-to-right',
              //     itemOpacity: 0.85,
              //     symbolSize: 20,
              //     effects: [
              //       {
              //         on: 'hover',
              //         style: {
              //           itemOpacity: 1
              //         }
              //       }
              //     ]
              //   }
              // ]}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
          />
        </div>
        {/*<Table BILLS_DATA_SOURCE={BILLS_DATA_SOURCE} */}
        {/*       style={{borderRadius: '25px'}}*/}
        {/*       columns={columns}*/}
        {/*       bordered={false}*/}
        {/*       pagination={false}*/}
        {/*       size={"small"}*/}
        {/*       summary={pageData => {*/}
        {/*         let totalbudget = 0;*/}
        {/*         let totalActual = 0;*/}
        {/*         pageData.forEach(({budget, actual}) => {*/}
        {/*           totalbudget += budget;*/}
        {/*           totalActual += actual;*/}
        {/*         });*/}
        {/*         return (*/}
        {/*             <>*/}
        {/*               <tr>*/}
        {/*                 <td><b>Total</b></td>*/}
        {/*                 <td>{totalbudget}</td>*/}
        {/*                 <td>{totalActual}</td>*/}
        {/*               </tr>*/}
        {/*             </>*/}
        {/*         )*/}
        {/*       }}/>*/}
      </DashboardCard>
  );
}

export default BudgetDashboardCard;
