import React from 'react'
import { PageLayout } from "../components/page-layout";
import { PaintHeader } from '../components/paint/PaintHeader';
import { PaintContent } from '../components/paint/PaintContent';
import { PaintFooter } from '../components/paint/PaintFooter';

export const PaintPage = () => {
  return (
    <PageLayout>
      <>
        <PaintHeader />
        <PaintContent />
        <PaintFooter />
      </>
    </PageLayout>
  )
}