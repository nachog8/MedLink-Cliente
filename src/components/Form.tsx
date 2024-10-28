"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export function FormComponent() {
    const router = useRouter();
    const [value, setValue] = useState<string | undefined>(undefined);
    const [openCart, setOpenCart] = useState(false);

    return (
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setOpenCart(true); }}>
            <div className="flex justify-between gap-2">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Maria" 
                        className="block w-full border-[1px] border-[#BCC1CD] rounded-lg p-2" 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Apellido</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        placeholder="Gomez" 
                        className="block w-full border-[1px] border-[#BCC1CD] rounded-lg p-2" 
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Maria@gmail.com" 
                    className="block w-full border-[1px] border-[#BCC1CD] rounded-lg p-2" 
                    required
                />
            </div>
            <div>
                <label htmlFor="tlf">Número celular</label>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    className="block w-full border-[1px] border-[#BCC1CD] rounded-lg p-2"
                    required
                />
            </div>
            <div>
                <label htmlFor="comentario">Comentario</label>
                <textarea  
                    id="comentario"
                    placeholder='Dejanos tu comentario'
                    className="block h-[120px] max-h-[120px] w-full border-[1px] border-[#BCC1CD] rounded-lg p-2" 
                    required
                />
            </div>
            <div className="flex gap-2 items-center">
                <input type="checkbox" id="checkbox" required/>
                <label htmlFor="checkbox" className="block">Estoy de acuerdo con la política de privacidad</label>
            </div>
            <div>
                <button type="submit" className="w-full h-[48px] max-md:h-[40px] text-white border-[#950dfc] bg-gradient-to-t from-[#7d12cf] to-[#06207C] hover:opacity-90 rounded-lg font-bold">
                    Enviar
                </button>
            </div>
            {
                openCart && (
                    <div className="fixed inset-0 z-10 backdrop-blur-2xl flex justify-center items-center">
                        <div className="w-[90%] h-[90%] bg-white rounded-lg flex flex-col items-center gap-8 p-4 text-center relative">
                            <button 
                                onClick={() => { setOpenCart(false); router.refresh(); }} 
                                className="absolute top-[2%] right-[2%]"
                            >
                                <Image src="/close.svg" alt="close" width={40} height={40} />
                            </button>
                            <div>
                                <Image src="/check.svg" alt="check" width={100} height={100} />
                            </div>
                            <h2 className="text-2xl font-semibold">Gracias por ponerte en contacto con nosotros</h2>
                            <p>Tu opinión es muy valiosa para nosotros y nos esforzaremos por responderte lo más pronto posible</p>
                        </div>
                    </div>
                )
            }
        </form>
    );
}
