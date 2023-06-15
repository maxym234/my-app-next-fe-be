import React, {ReactNode} from 'react'
import Modal from 'antd/lib/modal';

interface Props {
    title: string,
    isModalOpen: boolean,
    handleOk?(): any,
    handleCancel(): any,
    children: ReactNode,
    okText: string,
    footer: ReactNode
    okButtonProps?: any,
}

export const ModalUI: React.FC<Props> = ({ title, isModalOpen, handleCancel,...props }) => {  
    return (
        <Modal okButtonProps={{htmlType: 'submit'}} title={title} open={isModalOpen} onCancel={handleCancel} {...props}>
            {props.children}    
        </Modal>
    )
}