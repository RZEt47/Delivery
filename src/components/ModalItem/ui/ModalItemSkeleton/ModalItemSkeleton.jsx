import cls from "@/layouts/ModalItemLayout/ui/ModalItemLayout.module.scss";
import {Button} from "@/ui/Button/index.js";
import {Skeleton} from "@/ui/Skeleton/index.js";

const ModalItemSkeleton = () => {
    return (
            <div className={cls.body}>

                <Skeleton className={cls.img} width={450} height={450} />

                <div className={cls.content}>
                    <Skeleton className={cls.title} width={250} height={25}/>

                    <div className={cls.options}>
                        <div className={cls.block}>
                            <Skeleton width={100} height={35}/>

                            <div className={cls.item}>
                                <Skeleton width={280} height={50}/>
                                <Skeleton width={280} height={50}/>
                            </div>
                        </div>

                        <div className={cls.block}>
                            <Skeleton width={100} height={35}/>

                            <div className={cls.item}>
                                <Skeleton width={280} height={50}/>
                                <Skeleton width={280} height={50}/>
                            </div>
                        </div>
                    </div>

                    <div className={cls.footer}>
                        <Skeleton width={125} height={30}/>

                        <Skeleton width={155} height={50}/>
                    </div>
                </div>
            </div>
    );
};

export {ModalItemSkeleton};