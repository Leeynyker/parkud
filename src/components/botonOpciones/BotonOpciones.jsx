import { ButtonGroup, Button, Whisper, Popover, Dropdown, IconButton } from 'rsuite';
import ArrowDownIcon from '@rsuite/icons/ArrowDown';
import React, { useState } from 'react';





export default function OptionButton({data, callback }) {

    const sendData = (callbackData) => {
        console.log("Datos enviados:", callbackData);
        callback(callbackData);
      };
    
      


    const options = data.map((item) => item.nombreParqueadero);
    const [action, setAction] = React.useState(0);

    return (
        
        <ButtonGroup>
            <Button color="orange" appearance="primary">{options[action]}</Button>
                <Whisper
                    placement="bottomEnd"
                    trigger="click"
                    speaker={({ onClose, left, top, className }, ref) => {
                    const handleSelect = eventKey => {
                        onClose();
                        setAction(eventKey);

                        console.log(eventKey);
                        sendData(eventKey);
                    };
                    return (
                        <Popover ref={ref} className={className} style={{ left, top }} full>
                        <Dropdown.Menu onSelect={handleSelect}>
                            {options.map((item, index) => (
                                
                            <Dropdown.Item key={index} eventKey={index}>
                                {item}
                            </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                        </Popover>
                    );
                    }}
                >
                    <IconButton color='orange' appearance="primary" icon={<ArrowDownIcon />} />
                </Whisper>
        </ButtonGroup>
    );
}