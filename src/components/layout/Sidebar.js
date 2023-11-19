import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SidebarCom = () => {
    const [isOpen, setOpen] = useState(true);
    const menuItems = ['Dashboard', 'To-do Lists', 'Companies', 'Assets', 'Tickets', 'Operations', 'Reports', 'Library'];
    return (
        <div className={`p-2 bg-[#191919] duration-500 relative ${isOpen ? 'h-[100vh] min-w-[184px]' : 'h-[80vh]'}`}>
            {/* <div className="pt-6">
                <div>
                    <Sidebar
                        className={`app !border-none text-white ${isOpen ? '!w-44 !min-w-[176px]' : '!w-fit'}`}
                        style={{ background: '#191919', minWidth: '0px' }}
                    >
                        <Menu
                            menuItemStyles={{
                                button: ({ level, active, disabled }) => {
                                    return {
                                        color: disabled ? '#eee' : '#C5C5C5',
                                        backgroundColor: '#191919',
                                        '&:hover': {
                                            backgroundColor: '#335B8C !important',
                                            color: 'white !important',
                                            fontWeight: 'bold !important',
                                        },
                                    };
                                },
                            }}
                        >
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideDashboard} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Dashboard</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideAssets} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Assets</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideTickets} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Tickets</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideLibrary} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Detections</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideReports} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Reports</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <SubMenu
                                label={
                                    <div className="flex gap-4 items-center">
                                        <img src={SideOperations} alt="no img" className="min-w-[16px]" />
                                        {isOpen && <span>Operations</span>}
                                    </div>
                                }
                                className="Operations"
                            >
                                <MenuItem>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <img src={SideOperations} alt="no img" className="min-w-[16px]" />
                                            {isOpen && <span>Threat Sensor</span>}
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <img src={SideOperations} alt="no img" className="min-w-[16px]" />
                                            {isOpen && <span>Credentials</span>}
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <img src={SideOperations} alt="no img" className="min-w-[16px]" />
                                            {isOpen && <span>Policy</span>}
                                        </div>
                                    </div>
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </Sidebar>
                </div>
            </div>
            <div className={`w-full flex ${isOpen ? 'justify-end absolute bottom-9 right-5' : 'justify-center mt-9'}`}>
                <button className="rounded-lg bg-[#474747] text-white p-2" onClick={() => setOpen(!isOpen)}>
                    <img src={SideCollapseVertical} alt="no icon" />
                </button>
            </div> */}
        </div>
    );
};

export default SidebarCom;