import * as React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

export function ActionCard({ title, description }) {
    return (
        <Card className="group transition-colors hover:bg-secondary/20">
            <CardHeader>
                <CardTitle >
                    <span className='flex'>
                        <span>{title}</span>
                        <span className="inline-block transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-2 motion-reduce:transform-none pl-1">
                            <ArrowRight size={'1.5rem'} />
                        </span>
                    </span>
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
