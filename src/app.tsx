import { TextRotator } from './text-rotator'

const content = ['developer', 'designer', 'engineer']

export const App = () => {
  return (
    <div className='min-h-full bg-[#1a1a1a] text-indigo-100 flex items-center justify-center p-4'>
      <h1 className='text-7xl leading-snug w-[21rem] font-bold'>
        I'm a <br />
        front-end <br />
        <TextRotator content={content} />
      </h1>
    </div>
  )
}
