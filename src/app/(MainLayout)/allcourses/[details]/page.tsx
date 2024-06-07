"use client"

import PageHeader from "@/components/component/pageHeader/pageHeader";

type Props = {}

function Details({ }: Props) {


    return (
        <section>
            <PageHeader heading="Course details" >
                <h3 className="text-xl">Course Title</h3>
            </PageHeader>
        </section>
    )
};

export default Details;