import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function AgentCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Agent Name</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Agent description goes here.</p>
            </CardContent>
        </Card>
    );
}
