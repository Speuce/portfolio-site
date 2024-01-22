"use client"
export interface ProjectItemProps {
    name: string;
    description: string;
    image: string;       
    imageRight?: boolean | undefined;
    url?: string | undefined;
}


const ProjectItem = (props: ProjectItemProps) => {
    console.log('loading with imageRight: ' + props.imageRight)
    return (
        <div className='h-96'>
            <a href={props.url} target="_blank">
                <h1 className="underline text-2xl font-bold sm:text-4xl text-slate-100 mb-12">
                    { props.name }
                </h1>
            </a> 
            <div className={`flex flex-wrap sm:flex-nowrap justify-center gap-12 items-center ${!!props.imageRight? 'flex-row-reverse': 'flex-row'}`}> 
                <div className="flex-grow flex-shrink-0 basis-1/3">
                    
                <img className="rounded-lg shadow-md w-full" src={props.image} alt="Matt Kwiatkowski"/>
            </div>
            <span className="text-m font-normal text-slate-100 sm:text-[1.3rem] leading-relaxed">
                { props.description }
            </span> 
            </div>
        </div>
    );
}

export default ProjectItem;