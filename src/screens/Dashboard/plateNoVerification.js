const PlateNoVerification = () => {
    return (
        <>
            <p className='text-4xl font-bold'><span className="text-gray-400">|</span> Plate Number Verification</p>
            <form
                action=''
                className='flex flex-col items-center justify-center space-y-3 text-white p-6 border-2 w-6/12  mt-8 bg-pink-500'>
                <p>Verify Your Plate Number</p>
                <input
                    type='text'
                    className='text-black p-6 h-12 w-full rounded-lg'
                />
                <button className="p-3 bg-violet-500 text-white w-36 shadow-xl rounded-xl">
                    Submit
                </button>
            </form>
        </>
    )
}

export default PlateNoVerification;