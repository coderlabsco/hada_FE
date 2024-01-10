'use client'
import HadaButton from '@/components/HadaButton'
import HadaInput from '@/components/HadaInput'
import { IRegisterReportType } from '@/interfaces/interfaces'
import { Form, Radio } from 'antd'
import { useRouter } from 'next/navigation'

const RegisterVisitor = () => {
  const router = useRouter();

  function goToHistory() {
    router.push('/history')
  }

  return (
    <section className='w-[350px] h-[866px] md:w-[580px] md:h-[627px] lg:w-[607px] lg:h-[571px]'>
      <h2 className='text-xl font-semibold mb-[22px] background'>Registrar Ingreso De Visitante</h2>
      <Form layout='vertical'>
        <Form.Item<IRegisterReportType> name='photo' className='w-[310px] md:w-[319px] lg:w-[227px]'>
          <HadaInput className='bg-[#f0f0f0] h-[149px] md:h-[153px] lg:h-[109px] ' />
          <div className='pt-[12px]'>
            <HadaButton>Tomar foto</HadaButton>
          </div>
        </Form.Item>

        <div className='pt-[5px] flex flex-col md:flex-row'>
          <div className='md:pr-7'>
            <Form.Item<IRegisterReportType> name='name'
              rules={[{ required: true, message: 'Ingrese el nombre del visitante' }]}
              label='Nombre (Visitante)'
              className='w-[310px] md:w-[250px] lg:w-[289.5px]'>
              <HadaInput />
            </Form.Item>

            <Form.Item<IRegisterReportType> name='typeVehicle'
              label='Tipo de vehículo'
              rules={[{ required: true, message: 'Seleccione un tipo de vehículo' }]}>
              <Radio.Group>
                <Radio value={'CAR'}>Carro</Radio>
                <Radio value={'MOTORCYCLE'}>Moto</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item<IRegisterReportType> name='brand'
              rules={[{ required: true, message: 'Ingrese la marca del vehículo' }]}
              label='Marca del vehículo'
              className='w-[310px] md:w-[250px] lg:w-[289.5px]'>
              <HadaInput />
            </Form.Item>
          </div>

          <div>
          <Form.Item<IRegisterReportType> name='brand'
              rules={[{ required: true, message: 'Ingrese un apartamento' }]}
              label='Apartamento al que se dirije'
              className='w-[310px] md:w-[250px] lg:w-[289.5px]'>
              <HadaInput />
            </Form.Item>

            <Form.Item<IRegisterReportType> name='plateByPerson'
              rules={[{ required: true, message: 'Ingrese la placa del vehículo' }]}
              label='Placa del vehículo'
              className='w-[310px] md:w-[250px] lg:w-[289.5px]'>
              <HadaInput />
            </Form.Item>

            <Form.Item<IRegisterReportType> name='nameToVisit'
              rules={[{ required: true, message: 'Ingrese el nombre de la persona a visitar' }]}
              label='Nombre (persona a quien visitar)'
              className='w-[310px] md:w-[250px] lg:w-[289.5px]'>
              <HadaInput />
            </Form.Item>
          </div>
        </div>
        <div className='lg:flex sm:flex-col sm:justify-center md:flex-col-2 md:justify-normal lg:flex-col-2 lg:justify-normal'>
          <div>
            <HadaButton onClick={goToHistory} className='mb-3 w-[310px] md:w-[250px] lg:w-[256.5px]' style={{ paddingBottom: '10px' }}>Historial de Registros</HadaButton>
          </div>
          <div>
            <HadaButton className='w-[310px] md:w-[250px] lg:w-[256.5px]' style={{ backgroundColor: 'black', color: 'white' }}>Registrar Ingreso</HadaButton>
          </div>
        </div>
      </Form>
    </section>

  )
}

export default RegisterVisitor