import Spline from '@splinetool/react-spline';

export default function mid() {
    return (
        <div className='h-[150vh] max-[700px]:h-[400vh] w-[100%] flex justify-center items-center flex-col max-[700px]:gap-y-4'>
            <div className='w-[80%] h-[70vh] flex justify-center items-center max-[700px]:h-[190vh] max-[700px]:w-[90%] max-[700px]:flex-col ml-[15%]'>
                <div className='w-[80%] max-[700px]:h-[90vh] max-[700px]:w-[80%]'>
                    <h2 className='text-[4vh] text-white'>The Wizards Home</h2>
                    <p className='text-white text-[2.3vh]'>The Wizard's Home wasn't your typical dwelling. Clad in living bark, it pulsed with a faint bioluminescence, casting an ethereal glow over the surrounding wildflowers. Inside, shelves groaned under the weight of grimoires and vials of shimmering potions. A crackling fire in the hearth cast dancing shadows on the walls, where fantastical creatures cavorted in silent murals. The air hummed with an intangible magic, a promise of wonder waiting to be discovered.</p>
                </div>  
                <Spline className='flex justify-center items-center max-[700px]:w-[100%] max-[700px]:h-[90vh] w-[20%]' scene="https://prod.spline.design/xEAdY-lDDdB-dcVo/scene.splinecode" />
            </div>
            <div className='flex-row-reverse w-[80%] h-[70vh] max-[700px]:h-[190vh] max-[700px]:w-[90%] flex justify-center items-center max-[700px]:flex-col max-[700px]:w-[80%] mr-[15%]'>
                <div className='w-[80%] max-[700px]:w-[80%] max-[700px]:h-[90vh]'>
                    <h2 className='text-[4vh] text-white'>The Frog Wizard</h2>
                    <p className='text-white text-[2.3vh]'>
                        Wartlet the Frog Wizard wasn't known for grand pronouncements. Instead, he cast his spells with a flick of his webbed hand and a muttered rhyme, often delivered in a surprisingly deep croak. His abode was a hollowed-out log overflowing with shiny trinkets and peculiar fly-catching contraptions. Despite his unconventional ways, whispers of his potent swamp magic and uncanny knack for talking to amphibians drew all sorts of curious creatures to his doorstep..</p>
                </div>
                <Spline className='max-[700px]:w-[100%] max-[700px]:h-[90vh] w-[20%]' scene="https://prod.spline.design/B5uJU4yMWgNqt3AJ/scene.splinecode" />
            </div>
        </div>
    );
}
