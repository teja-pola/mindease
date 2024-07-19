'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const CreateNewForumCard = () => {
  return (
    <MotionCard
      initial={{ opacity: 0, y: -300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="md:w-[300px] w-full sticky top-4 bg-background bg-opacity-50 backdrop-blur-md h-fit z-20"
    >
      <CardHeader>
        <CardTitle>Start a new forum...</CardTitle>
        <CardDescription>
          Talk about your issues, get help, and connect with others who
          understand.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link className="space-x-2" href="/forum/create">
            <span>Create a new forum</span>
            <ArrowRight />
          </Link>
        </Button>
      </CardContent>
    </MotionCard>
  );
};

export default CreateNewForumCard;
