import { useForm, isEmail, hasLength } from '@mantine/form';
import { Button, Group, TextInput, Box, Textarea } from '@mantine/core';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

export const KontaktForm = (): JSX.Element => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    validate: {
      name: hasLength(
        { min: 2, max: 18 },
        'Ihr Name muss zwischen 2 und 18 Zeichen lang sein'
      ),
      email: isEmail('Ungültige Email-Adresse'),
      message: hasLength(
        { min: 10 },
        'Ihre Nachricht muss mindestens 10 Zeichen lang sein'
      ),
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: typeof form.values) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/serverless/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
        }),
      });

      if (response.ok) {
        form.reset();
        notifications.show({
          title: 'Email gesendet',
          message: 'Wir werden uns so schnell wie möglich bei Ihnen melden',
          color: 'green',
          icon: <IconCheck />,
        });
      } else {
        notifications.show({
          title: 'Email konnte nicht gesendet werden',
          message: 'Bitte versuchen Sie es später noch einmal',
          color: 'red',
          icon: <IconX />,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      // Set loading back to false when the request ends,
      // whether it was successful or not
      setIsLoading(false);
    }
  };

  return (
    <Box
      component='form'
      maw={400}
      mx='auto'
      onSubmit={form.onSubmit(() => {
        handleSubmit(form.values);
      })}
    >
      <TextInput
        label='Name'
        placeholder='Ihr Name'
        {...form.getInputProps('name')}
      />
      <TextInput
        label='Email'
        placeholder='Ihre Email-Adresse'
        mt='sm'
        {...form.getInputProps('email')}
      />
      <TextInput
        label='Betreff'
        placeholder='Betreff'
        mt='sm'
        {...form.getInputProps('subject')}
      />
      <Textarea
        label='Nachricht'
        placeholder='Ihre Nachricht'
        mt='xs'
        {...form.getInputProps('message')}
      />

      <Group position='right' mt='md'>
        <Button loading={isLoading} type='submit'>
          Senden
        </Button>
      </Group>
    </Box>
  );
};
