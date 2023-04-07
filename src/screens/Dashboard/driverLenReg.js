const DriverLensRegistration = () => {
    return (
        <>
            <p className='text-4xl font-bold'><span className="text-gray-400">|</span> Driver's License Registration</p>
                <form
                    action=''
                    className='p-6 border-2 mt-8'>
                    <div className='flex flex-row items-center justify-between mt-6 font-bold'>
                        <div className='space-y-3 w-1/2 pr-8'>
                            <p>Title</p>
                            <input
                                type='text'
                                placeholder='Title'
                                className='h-16 w-full border-2 rounded-xl p-1'
                                // value={title}
                                // onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='space-y-3 w-1/2 pl-8'>
                            <p>Type</p>
                            <input
                                type='text'
                                className='h-16 w-full border-2 rounded-xl p-1'
                                placeholder='Type'
                                // value={type}
                                // onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
        </>
    )
}

export default DriverLensRegistration;