import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Card, CardContent } from '@/components/ui/card'

export default function ComingSoon() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Coming Soon</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardContent>
                    <p>Coming soon feature ...</p>
                </CardContent>
            </Card>
        </>
    )
}