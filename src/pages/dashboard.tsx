import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { SiderBar } from "../components/SideBar";

import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-06-30T00:00:00.000z',
      '2022-07-01T00:00:00.000z',
      '2022-07-02T00:00:00.000z',
      '2022-07-03T00:00:00.000z',
      '2022-07-04T00:00:00.000z',
      '2022-07-05T00:00:00.000z',
      '2022-07-06T00:00:00.000z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3, 
    }
  },
};

const series = [
  { name: 'series1', data: [31, 120 ,10, 78, 61, 18, 127] }
]

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' maxWidth={1400} my='6' mx='auto' px='6'>
        <SiderBar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
          <Box
            p={['6', '8']}
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
            <Chart options={options} series={series} type='area' height={160}/>
          </Box>

          <Box
            p={['6', '8']}
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
            <Chart options={options} series={series} type='area' height={160}/>

          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}