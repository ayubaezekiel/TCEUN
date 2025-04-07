import {
  Badge, // To access theme colors/spacing if needed
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  rem,
  rgba,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconCalendarEvent } from "@tabler/icons-react"; // Example icon

// --- Sample Data Generation ---
// In a real app, this would come from an API
const sampleNewsData = [
  {
    id: 1,
    title: "Workshop On Genito-urinary Reconstructions",
    date: "June 15-16, 2024",
    category: "Workshop",
    description:
      "Join leading experts for a hands-on workshop covering the latest techniques in genito-urinary reconstruction.",
    imageUrl:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", // Replace with relevant placeholder
    isUpcoming: true,
  },
  {
    id: 2,
    title: "Annual Conference on Advances in Urology",
    date: "August 5-7, 2024",
    category: "Conference",
    description:
      "Presentations, discussions, and networking opportunities focusing on cutting-edge urological research and practice.",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", // Replace with relevant placeholder
    isUpcoming: true,
  },
  {
    id: 3,
    title: "New Research Published on Kidney Stone Prevention",
    date: "May 28, 2024",
    category: "Research",
    description:
      "Our team's latest findings on dietary impacts on kidney stone formation have been published in the 'Journal of Urology'.",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", // Replace with relevant placeholder
    isUpcoming: false,
  },
  {
    id: 4,
    title: "Community Health Fair: Free Screenings",
    date: "September 10, 2024",
    category: "Community",
    description:
      "Visit our booth at the community health fair for free prostate health screenings and educational materials.",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", // Replace with relevant placeholder
    isUpcoming: true,
  },
  // Add more sample news items if needed
];

export default function NewsPage() {
  return (
    <div>
      <NewsHero />

      {/* --- News & Events Section --- */}
      <Container size={"xl"} className="my-16 md:my-24">
        {/* Section Title */}
        <div className="text-center mb-12">
          <Title
            order={2}
            className="uppercase text-3xl md:text-4xl font-bold text-gray-700 inline-block"
          >
            Latest Updates
          </Title>
          <div className="border-b-4 border-cyan-600 w-16 mx-auto mt-2"></div>
        </div>

        {/* Grid for News Cards */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }} // Responsive columns
          spacing="xl" // Spacing between grid items
        >
          {sampleNewsData.map((item) => (
            <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                {/* Use aspect-ratio to maintain image shape */}
                <Image
                  src={item.imageUrl}
                  height={200}
                  alt={`Image for ${item.title}`}
                  fit="cover" // Ensures the image covers the area
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Title order={3} className="font-semibold text-lg line-clamp-2">
                  {" "}
                  {/* Limit title lines */}
                  {item.title}
                </Title>
                <Badge
                  color={item.isUpcoming ? "red" : "cyan"}
                  variant="light"
                  size="sm"
                  className="capitalize"
                >
                  {item.isUpcoming ? "Upcoming" : item.category}
                </Badge>
              </Group>

              <Group gap="xs" className="text-sm text-gray-600 mb-3">
                <IconCalendarEvent size={16} stroke={1.5} />
                <span>{item.date}</span>
              </Group>

              <Text size="sm" c="dimmed" className="line-clamp-3 mb-4">
                {" "}
                {/* Limit description lines */}
                {item.description}
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Read More
              </Button>
            </Card>
          ))}
        </SimpleGrid>

        {/* Message if no news */}
        {sampleNewsData.length === 0 && (
          <Text ta="center" c="dimmed" mt="xl">
            No news or events to display at this moment. Check back soon!
          </Text>
        )}
      </Container>
    </div>
  );
}

function NewsHero() {
  const theme = useMantineTheme();

  return (
    <Box
      pos="relative"
      h={{ base: rem(500), md: rem(600) }}
      bg={theme.colors[theme.primaryColor][9]}
    >
      <Container size="lg" h="100%">
        <Stack
          align="center"
          justify="center"
          h="100%"
          gap="xl"
          pos="relative"
          ta="center"
        >
          <Badge
            variant="filled"
            size="lg"
            color="white"
            px="xl"
            py="xs"
            style={{ backgroundColor: rgba(theme.white, 0.2) }}
          >
            Excellence in Specialized Care
          </Badge>

          <Title
            order={1}
            fz={{ base: rem(36), sm: rem(52) }}
            fw={900}
            lh={1.1}
            className="animate-title"
            c={"white"}
          >
            News & Upcoming Events
          </Title>

          <Text
            size="xl"
            maw={rem(750)}
            opacity={0.95}
            lh={1.6}
            className="animate-text"
            c={"white"}
          >
            Stay updated with the latest announcements, research highlights, and
            upcoming workshops from our department.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
