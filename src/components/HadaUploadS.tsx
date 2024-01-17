import { useState } from 'react'
import { Form, Modal, Upload, message } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = (error) => reject(error)
    })

type AvatarChangeProps = {
    name: string
    }

const allowedImageTypes = ['image/png', 'image/jpeg']
const maxFileSize = 10 * 1024 * 1024
const AvatarChange: React.FC<AvatarChangeProps> = ({ name }) => {
    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState('')
    const [previewTitle, setPreviewTitle] = useState('')
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const handleCancel = () => setPreviewOpen(false)
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile)
        }
        setPreviewImage(file.url || (file.preview as string))
        setPreviewOpen(true)
        setPreviewTitle(
            file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
        )
    }
    const fileChecker = (file: File) => {
        const isImage = allowedImageTypes.includes(file.type)
        const isSizeValid = true// file.size <= maxFileSize
        if (!isImage) {
            message.error(`${file.name} is not a image file`)
        }
        if (!isSizeValid) {
            message.error(`${file.name} is over 2mb`)
        }
        return isImage && isSizeValid
    }

    const beforeUpload = (file: File) => {
        if (fileChecker(file)) {
            return false
        } else {
            return Upload.LIST_IGNORE
        }
        // return (isImage && isSizeValid) || Upload.LIST_IGNORE
    }
    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList)
    const uploadButton = (
        <div>
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    )
    return (
        <>
            <Form.Item name={name}>
                <Upload
                    listType="picture-circle"
                    fileList={fileList}
                    beforeUpload={beforeUpload}
                    // customRequest={() => false}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    accept=".png,.jpg,.jpeg,.webp"
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
            </Form.Item>
            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    )
}
export default AvatarChange