'use client'
import { ColumnNames, IReport, typeVehicle } from '@/interfaces/interfaces'
import { Button, Pagination } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import React from 'react'

const History = () => {

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

  const data: IReport[] = [
    {
      "key": "1",
      "_id": "659460bf50b48a51055c8563",
      "name": "Guillermo",
      "brand": "BMW M3",
      "typeVehicle": typeVehicle.MOTORCYCLE,
      "apartment": "502",
      "plateByPerson": "FFF-122",
      "nameToVisit": "Pamela",
      "imageID": "659460bf50b48a51055c8563",
      "timeAt": ("2023-12-22T16:03:52.535+0000"),
      "whoRegistered": ("6581f3435c84108688f8b2b1")
    },
    {
      "key": "2",
      "_id": "659460bf50b48a51055c8562",
      "name": "Guillermo",
      "brand": "BMW M3",
      "typeVehicle": typeVehicle.MOTORCYCLE,
      "apartment": "502",
      "plateByPerson": "FFF-122",
      "nameToVisit": "Pamela",
      "imageID": "659460bf50b48a51055c8563",
      "timeAt": ("2023-12-22T16:03:52.535+0000"),
      "whoRegistered": ("6581f3435c84108688f8b2b1")
    }

  ]

  function registerNewVisitor() {
    <Link href={'/register'}></Link>
  }
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
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