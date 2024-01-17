'use client'
import { IReport, typeVehicle } from '@/interfaces/interfaces'
import { Button, Pagination } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import React from 'react'
import { useRouter } from 'next/navigation'
import { getClient } from '@/graphql/ApolloClient'
import { CALL_POLICE, GET_ALL_REPORTS } from '../../types/operation'
import { useQuery } from '@apollo/client'
import { useStore } from '@/context/zustand'

const History = () => {
  const router = useRouter();
  const {access_token} = useStore()
  const {data, loading, error} = useQuery(GET_ALL_REPORTS, {
    context: {headers: {
      Authorization: `Bearer ${access_token}`
    }}
  })
  const columns: ColumnsType<IReport> = [
    {
      title: 'Visitante',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Apto',
      dataIndex: 'apartment',
      key: 'apartment'
    },
    {
      title: 'Placa',
      dataIndex: 'plateByPerson',
      key: 'plateByPerson'
    },
    {
      title: 'Tipo de vehículo',
      dataIndex: 'typeVehicle',
      key: 'typeVehicle'
    },
    {
      title: 'Marca del vehículo',
      dataIndex: 'brand',
      key: 'brand'
    },
    {
      title: 'Persona a quien visitar',
      dataIndex: 'nameToVisit',
      key: 'nameToVisit'
    },
  ]

  const newData: IReport[] = data?.GetAllReports

  function registerNewVisitor() {
    router.push('/register-visitor')
  }
  return (
    <>
      <Table
        columns={columns}
        loading={loading}
        dataSource={newData}
        footer={() => <footer className='flex justify-between'>
          <Pagination ></Pagination>
          <Button onClick={registerNewVisitor}>Registrar Ingreso de Visitante</Button>
        </footer>}
        pagination={false}
      />
    </>
  )
}

export default History