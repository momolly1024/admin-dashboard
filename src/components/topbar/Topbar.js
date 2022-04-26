import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'
import { ClassNames } from '@emotion/react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const Notification = (props) => {
    const { modalIsOpen, setIsOpen } = props
    return (
        <ClassNames>
            {({ css, cx }) => (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    overlayClassName={{
                        base: 'overlay-base',
                        afterOpen: 'overlay-after',
                        beforeClose: 'overlay-before',
                    }}
                    className={{
                        base: 'content-base',
                        afterOpen: 'content-after',
                        beforeClose: 'content-before',
                    }}
                    closeTimeoutMS={500}
                    portalClassName={css`
                        .overlay-base {
                            padding: 1rem;
                            position: fixed;
                            top: 0;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            background-color: rgba(0, 0, 0, 0);
                            opacity: 0;
                            transition-property: background-color, opacity;
                            transition-duration: 500ms;
                            transition-timing-function: ease-in-out;
                            outline: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .overlay-after {
                            background-color: rgba(0, 0, 0, 0.8);
                            opacity: 1;
                        }

                        .overlay-before {
                            background-color: rgba(0, 0, 0, 0);
                            opacity: 0;
                        }

                        .content-base {
                            position: relative;
                            top: auto;
                            left: auto;
                            right: auto;
                            bottom: auto;
                            margin: 0 auto;
                            border: 0;
                            outline: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 0%;
                            width: 0%;
                            background-color: transparent;
                            transition-property: background-color, width, height;
                            transition-duration: 500ms;
                            transition-timing-function: ease-in-out;
                        }

                        .content-after {
                            width: 50%;
                            height: 50%;
                            background-color: rgba(250, 190, 190, 0.8);
                        }

                        .content-before {
                            width: 0%;
                            height: 0%;
                            background-color: transparent;
                        }
                    `}
                >
                    <>
                        <ul>
                            <li>通知：aaaaa</li>
                            <li>通知：bbbbb</li>
                        </ul>
                        {/* <button onClick={() => setIsOpen(false)}>
                            Close Modal
                        </button> */}
                    </>
                </Modal>
            )}
        </ClassNames>
    )
}

function Topbar() {
    const [modalIsOpen, setIsOpen] = React.useState(false)

    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>admin dashboard</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone onClick={() => setIsOpen(true)} />
                        <span className='topIconBadge'>2</span>
                        <Notification
                            modalIsOpen={modalIsOpen}
                            setIsOpen={setIsOpen}
                        />
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img
                        src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                        alt=''
                        className='topAvatar'
                    />
                </div>
            </div>
        </div>
    )
}

export default Topbar
