import { Text ,TextInput,Button} from '@mantine/core';
import { QRCodeSVG } from "qrcode.react"
import { useClipboard } from '@mantine/hooks';
// import Service from '../../utils/http';
import Service from './utils/http';
import { IconCopy } from '@tabler/icons-react';
const obj = new Service();


export default function UrlResponse(props) {
  const clipboard = useClipboard({ timeout: 500 });
   const surl = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;
   return (
       <div>
           <Text color="blue"> {surl} </Text>
           <TextInput value={surl} rightSection={<IconCopy 
           onClick={()=>{
               console.log("clicked");
               clipboard.copy(surl)
           }}
           />}
/>

           <QRCodeSVG imageSettings={{
                     excavate: true,
                     src: '/HomeBackground.png',
                     height: 100,
                     width: 100
                 }} value={surl} size={400}>
                   <Image src={'/HomeBackground.png'} />
 </QRCodeSVG>
 <Button onClick={()=>{
               props.setResponse(null)
            }}> Reset </Button>

       </div>
   )
}

