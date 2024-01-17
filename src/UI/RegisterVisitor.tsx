'use client'
import HadaButton from '@/components/HadaButton'
import HadaInput from '@/components/HadaInput'
import { IRegisterReportType } from '@/interfaces/interfaces'
import { useMutation } from '@apollo/client'
import { Form, Radio, UploadProps } from 'antd'
import { useRouter } from 'next/navigation'
import { REGISTER_VISITOR } from '../../types/operation'
import { useStore } from '@/context/zustand'
import HadaUpload from '@/components/HadaUpload'
import AvatarChange from '@/components/HadaUploadS'

const RegisterVisitor = () => {
  const router = useRouter();
  const { access_token } = useStore()
  function goToHistory() {
    router.push('/history')
  }

  const [report, { loading }] = useMutation(REGISTER_VISITOR, {
    onCompleted: (input) => {
      console.log("Done");
    },
    context: {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  })

  const onFinish = (values: any) => {
    report({ variables: { inputReport: values, image: props.data} })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed: ', errorInfo);
  }

  const props: UploadProps = {
    name: 'image',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
  return (
    <section className='w-[350px] h-[866px] md:w-[580px] md:h-[627px] lg:w-[607px] lg:h-[571px]'>
      <h2 className='text-xl font-semibold mb-[22px] background'>Registrar Ingreso De Visitante</h2>
      <Form layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item name="image" className='w-[310px] md:w-[319px] lg:w-[227px]'>
          <div className='bg-[#f0f0f0] h-[149px] md:h-[153px] lg:h-[109px] ' />
          <div className='pt-[12px]'>

            <AvatarChange name='image' >
              <HadaButton>Tomar foto</HadaButton>
            </AvatarChange>
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
            <Form.Item<IRegisterReportType> name='apartment'
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
            <HadaButton loading={loading} type='primary' htmlType='submit'
              className='w-[310px] md:w-[250px] lg:w-[256.5px]' style={{ backgroundColor: 'black', color: 'white' }}>Registrar Ingreso</HadaButton>
          </div>
        </div>
      </Form>
    </section>

  )
}

export default RegisterVisitor